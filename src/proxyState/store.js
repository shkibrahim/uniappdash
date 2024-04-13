import { proxy } from 'valtio'
import Cookies from 'universal-cookie'
const cookie=new Cookies()
const state = proxy({
    orderFilterCriteria: "monthly",
    revenueFilterCriteria: "monthly",
    customerFilterCriteria: "monthly",
    mobileSidebar: false,
    orderStatusFilterCriteria: "All Status",
    defaultOrderFilterData: "today",
    filterOrderLength: 0,
    filterOrderStatusLength: 0,
    items:cookie.get("items")?cookie.get("items"):[]

})

export default state