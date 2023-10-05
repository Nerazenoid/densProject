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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Contacts