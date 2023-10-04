import { forwardRef } from 'react'
import styles from './Contacts.module.css'
import { YMaps, Map, FullscreenControl, ZoomControl, TypeSelector, Placemark } from '@pbe/react-yandex-maps'

const Contacts = forwardRef((props,ref) => {
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
                                    zoom: 13
                                }}>
                                <FullscreenControl />
                                <ZoomControl />
                                <TypeSelector />
                                <Placemark
                                    geometry={[53.198393, 45.012920]}
                                    properties={
                                        {
                                            iconCaption: 'DENS-Стоматология',
                                            balloonContent: '<img src="https://dens-stomat.ru/assets/img/photo.jpg" />'
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
                    <div>
                        <div className={styles.item}>
                            <div className={styles.img_block}>
                                <img src={process.env.REACT_APP_API_URL + 'grey.jpg'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Contacts