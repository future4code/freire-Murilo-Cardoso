/* ## 1) User (usuário)

- id em formato string e gerado pela própria aplicação
- name em formato string
- email em formato string
- password: senha hasheada em formato string
- role: enum “NORMAL” ou “ADMIN”

## 2) Post (publicação)

- id em formato string e gerado pela própria aplicação
- content em formato string representando o conteúdo em texto do post
- user_id em formato string e representando o id de quem criou o post
- likes em formato number iniciando em 0
 */



export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type post = {
    id: string, 
    content: string,
    user_id: string,
    like: number
}

export const userTableName = "Labook_Users";
export const postTableName = "Labook_Posts";
export const likeTableName = "Labook_Likes";