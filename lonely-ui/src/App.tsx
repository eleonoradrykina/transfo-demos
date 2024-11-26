
import styles from './App.module.css'
import Magnetic from './Magnetic'
import Gathering from './Gathering'
import GatheringHover from './GatheringHover'

import './App.css'

function App() {

  return (
    <>
       <main className={styles.main}>
      <div className={styles.container}>
        <Magnetic duration={0.75}>
         <button className={styles.button}>
          <p className={styles.button__text}>VEELGESTELDE VRAGEN</p>
         </button>
        </Magnetic>

        <Gathering duration={5.75} radius={5.2} ease="power.in">
          <button className={styles.button}>
            <p className={styles.button__text}>VEELGESTELDE VRAGEN</p>
        </button>
        </Gathering>

        <Gathering duration={5.75} radius={3.0} ease="power2.in">
          <button className={styles.button}>
            <p className={styles.button__text}>VEELGESTELDE VRAGEN</p>
          </button>
        </Gathering>

        <GatheringHover radius={4.0}>  
          <button className={styles.button}>
            <p className={styles.button__text}>VEELGESTELDE VRAGEN</p>
          </button>
        </GatheringHover>
      </div>
      </main>
    </>
  )
}

export default App


