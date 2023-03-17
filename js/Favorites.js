// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        const entries = [
            {
                login: "renato-albuquerque",
                name: "Renato Albuquerque",
                public_repos: "28",
                followers: "7"
            },
            {
                login: "maykbrito",
                name: "Mayk Brito",
                public_repos: "76",
                followers: "9589"
            }
        ]
    
        entries.forEach( user => {
            console.log(user);
        })
}
}

// clase que vai criar a visualização e eventos do HTML

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector("table tbody")

        this.update()
    }

    update() {
        this.removeAllTr()  

        this.entries.forEach(user => {
            const row = this.createRow

            row.querySelector(".user img").src = 'https://github.com/${user.login}.png'
            row.querySelector(".user img").alt = `Image of ${user.name}`
            row.querySelector(".user p").textContent = user.name
            row.querySelector(".user span").textContent = user.login
            row.querySelector(".repositories").textContent = user.public_repos
            row.querySelector(".followers").textContent = user.folloers            
            this.tbody.append(row)
        })
    }

    this.entries.forEach( user => {
        const row = this.createRow
    })

    createRow() {
        const tr = document.createElement("tr")

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/renato-albuquerque.png" alt="Picture Profile Renato Albuquerque">
                <a href="https://github.com/renato-albuquerque" target="_blank">
                    <p>Renato Albuquerque</p>
                    <span>renato-albuquerque</span>
                </a>
            </td>
            <td class="repositories">28</td>
            <td class="followers">7</td>
            <td><button class="remove">&times;</button></td>
        `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelector("tr").forEach((tr) => {
            tr.remove()
        });
    } 
}