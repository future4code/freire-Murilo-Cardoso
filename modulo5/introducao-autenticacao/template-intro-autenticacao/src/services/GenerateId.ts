import { v4 } from "uuid"

export class GenerateId {

    // Método que cria id e retorna id
    public generateId(): string {
        const id:string = v4()
        return id
    }
    
}