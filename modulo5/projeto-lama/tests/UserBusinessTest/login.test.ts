import { UserDatabaseMock } from "../moks/services/UserDataBaseMock"
import { IdGeneratorMock } from "../moks/services/IdGeneratorMock"
import { HashManagerMock } from "../moks/services/HashManagerMock"
import { UserBusiness} from "../../src/business/UserBusiness"
import { AuthenticatorMock } from "../moks/services/AuthenticatorMock"

describe("Testando login da UserBusiness", () =>{

    const userBusiness =  new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(), 
        new HashManagerMock(),
        new AuthenticatorMock()
    )

})