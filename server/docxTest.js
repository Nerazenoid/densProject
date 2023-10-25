const Document = require("docx").Document
const Paragraph = require("docx").Paragraph
const TextRun = require("docx").TextRun
const Packer = require("docx").Packer
const fs = require("fs")
const {AlignmentType, SectionType} = require("docx");


class Test {
    async createDocument(req, res) {

        const {title} = req.query
        const data = [
            {
                title: "Средний Кариес",
                complaints: "Жалобы на наличие кариозной бла бла бла",
                probing: 'Болезненное по ЭДГ, t-реакция(-)',
                treatment: 'под анастезией, препарирование, мед.обработка'
            },
            {
                title: "Реставрация",
                complaints: "Жалобы на отлом стенки зуба",
                probing: 'Безболезненное',
                treatment: 'препарирование, распломбирован'
            }
        ]


        const child = []
        data.map(item => {
                child.push(
                    new Paragraph({
                        spacing: {
                            before: 20 * 20,
                            after: 10 * 20
                        },
                        children: [
                            new TextRun({
                                text: item.title,
                                size: 14 * 2,
                                allCaps: true
                            })
                        ]
                    })
                )

                child.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: item.complaints
                            })
                        ]
                    })
                )

                child.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: item.treatment
                            })
                        ]
                    })
                )

                child.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: item.probing
                            })
                        ]
                    })
                )
            }
        )
        console.log(child)

        // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
        const
            doc = new Document({
                sections: [
                    {
                        properties: {
                            type: SectionType.CONTINUOUS
                        },
                        children: child
                    }
                ],
            });

// Used to export the file into a .docx file
        Packer
            .toBuffer(doc)

            .then(
                (
                    buffer
                ) => {
                    fs
                        .writeFileSync(
                            'img/documents/'
                            +
                            title
                            +
                            '.docx'
                            ,
                            buffer
                        )
                    ;
                }
            )
        ;

    }
}

module.exports = new Test()
