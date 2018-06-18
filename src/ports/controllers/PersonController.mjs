export default class PersonController {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    getData() {
        return this.req.body
    }

    sendSuccessResponse(createdUser) {
        this.res.json(createdUser)
    }

    sendErrorResponse(err) {
        this.next(err)
    }
}
