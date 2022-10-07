
export class HashManagerMock {
    
    public hash = async (plaintext: string): Promise<string> => {

        switch(plaintext){
            case "bananinha":
                return "incluir hash aqui"
            default:
                return "hash-mock" 
        }

    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        switch(plaintext){
            case "bananinha":
                return hash === "incluir hash aqui";
            default:
                return  false
        }
    }
    
}

