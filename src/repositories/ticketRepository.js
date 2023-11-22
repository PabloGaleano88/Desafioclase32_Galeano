import {ticketModel} from '../dao/MongoDB/models/ticketModel.js'

class TicketRepository{

    async createTicket(code,amount,purchaser){
        try{
            const ticket = await ticketModel.create({
                code,
                amount,
                purchaser,
            })
            return ticket
        }
        catch(error){
            throw error
        }
    }

    async findTicket(code,purchaser){
        try{
            if(code){
                const ticket = await ticketModel.findOne({code:code})
            }
            if (purchaser) {
                const ticket = await ticketModel.findOne({pruchaser:purchaser})
            } else {
                console.log("codigo no encontrado")
            }
        }
        catch(error){
            throw error
        }
    }

}

export default TicketRepository