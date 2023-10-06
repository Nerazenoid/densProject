import { forwardRef } from 'react'
import styles from './Contacts.module.css'
import { ReactComponent as MailImg } from '../img/mail.svg'
import { ReactComponent as LocatonImg } from '../img/location.svg'
import { ReactComponent as PhoneImg } from '../img/phone.svg'
import { YMaps, Map, FullscreenControl, ZoomControl, TypeSelector, Placemark } from '@pbe/react-yandex-maps'

const Contacts = forwardRef((props, ref) => {
    return (
        <div className={styles.wrap} ref={ref}>
            <div className={styles.block}>
                <div className={styles.main_block}>
                    <div className={styles.map}>
                        <YMaps>
                            <Map
                                width={'100%'}
                                height={'100%'}
                                defaultState={{
                                    center: [53.198393, 45.012920],
                                    zoom: 14
                                }}>
                                <FullscreenControl />
                                <ZoomControl />
                                <TypeSelector />
                                <Placemark
                                    geometry={[53.198393, 45.012920]}
                                    properties={
                                        {
                                            iconCaption: 'DENS-Стоматология',
                                        }
                                    }
                                    options={{
                                        preset: 'islands#darkGreenDotIcon'
                                    }}
                                    modules={'geoObject.addon.balloon'}
                                />
                            </Map>
                        </YMaps>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <p className={styles.title}>Контакты</p>
                            <div className={styles.row}>
                                <LocatonImg />
                                <p className={styles.text}>г. Пенза, ул. Гладкова 20, 2 подъезд</p>
                            </div>
                            <div className={styles.row}>
                                <PhoneImg />
                                <a href='tel:+78412681709'><p className={styles.text}>+7 841 268-17-09</p></a>
                            </div>
                            <div className={styles.row}>
                                <PhoneImg />
                                <a href='tel:+79273897858'><p className={styles.text}>+7 927 389-78-58</p></a>
                            </div>
                            <div className={styles.row}>
                                <MailImg />
                                <p className={styles.text}>dens-stoma@inbox.ru</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.title}>График работы</p>
                            <ul className={styles.time_list}>
                                <li className={styles.time}><b>ПН</b><p className={styles.text}>8:30 – 20:00</p></li>
                                <li className={styles.time}><b>ВТ</b><p className={styles.text}>8:30 - 20:00</p></li>
                                <li className={styles.time}><b>СР</b><p className={styles.text}>8:30 - 20:00</p></li>
                                <li className={styles.time}><b>ЧТ</b><p className={styles.text}>8:30 - 20:00</p></li>
                                <li className={styles.time}><b>ПТ</b><p className={styles.text}>8:30 - 20:00</p></li>
                                <li className={styles.time}><b>СБ</b><p className={styles.text}>9:00 - 17:00</p></li>
                                <li className={styles.time}><b>ВС</b><p className={styles.text}>Выходной</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Contacts