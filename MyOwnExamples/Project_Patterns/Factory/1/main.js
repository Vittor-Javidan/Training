import Application from "./Application.js"
import GLOBAL from "./GlobalConstants.js"

const app = Application.getInstance()

app.deliver(GLOBAL.TRANSPORT_TYPES.BOAT, GLOBAL.CONTAINER_TYPES.SMALL)
app.deliver(GLOBAL.TRANSPORT_TYPES.TRUCK, GLOBAL.CONTAINER_TYPES.LARGE)
app.deliver(GLOBAL.TRANSPORT_TYPES.BOAT, GLOBAL.CONTAINER_TYPES.MEDIUM)
app.deliver(GLOBAL.TRANSPORT_TYPES.TRUCK, GLOBAL.CONTAINER_TYPES.MEDIUM)