/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {
    faUserSecret,
    faCaretDown,
    faMagnifyingGlass,
    faCalendar,
    faCheckCircle,
    faCircle,
    faCheck,
    faUser,
    faBackwardStep,
    faForwardStep,
    faCaretRight,
    faCaretLeft
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret, 
    faCaretDown,
    faMagnifyingGlass,
    faCalendar,
    faCheckCircle,
    faCircle,
    faCheck,
    faUser,
    faBackwardStep,
    faForwardStep,
    faCaretLeft,
    faCaretRight
)

const fontAwesomeIcon = FontAwesomeIcon

export default fontAwesomeIcon;