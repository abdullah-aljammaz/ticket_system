# Movie Project With Express, Prisma
<p>we use Mysql</p>
<hr>

> [!IMPORTANT]  
> Make .env File And Download Packages

<h3>Download Packages</h3>

```cmd
$ npm i
```

<hr>

<h3>Upload schema.prismma To Database</h3>

```cmd
$ npx prisma db push
```

.env File

```env
DATABASE_URL="mysql://USER_NAME:PASSWORD@IP:PORT/DATABASE_NAME"
```

<h2>Routs To Use All Functions</h2>

<h3>User</h3>

| Path                         | Methods  | Role  |
| ---------------------------- | -------- | ----- |
| `/user/register`             | `POST`   | none  |
| `/user/login`                | `GET`    | none  |
| `/user/getAllUser`           | `GET`    | admin |
| `/user/getUserById`          | `GET`    | admin |
| `/user/update/ENTER_USER_ID` | `PUT`    | Role  |
| `/user/delete/ENTER_USER_ID` | `DELETE` | Role  |

<hr>

<h3>Event</h3>

| Path                           | Methods  |
| ------------------------------ | -------- |
| `/event/create`                | `POST`   |
| `/event/get_all_data`          | `GET`    |
| `/event/getById/  `            | `GET`    |
| `/event/getByCategory/  `      | `GET`    |
| `/event/update/ENTER_EVENT_ID` | `PUT`    |
| `/event/delete/ENTER_EVENT_ID` | `DELETE` |

<h3>Ticket</h3>

| Path                | Methods |
| ------------------- | ------- |
| `/ticket/create`    | `POST`  |
| `/ticket/getByUser` | `GET`   |

<hr>

<h3>Ticket</h3>

| Path                  | Methods |
| --------------------- | ------- |
| `/ticket/create`      | `POST`  |
| `/ticket/getCardUser` | `GET`   |

<hr>

<h3>FrontEnd Paths</h3>

| Path                      | Role  |
| ------------------------- | ----- |
| `/html/homepage.html`     | `none`  |
| `/html/event.html`        | `none`  |
| `/html/about.html`        | `none`  |
| `/html/ticket.html`       | `none`  |
| `/html/login_signUp.html` | `none`  |
| `/html/admin.html`        | `ADMIN` |

# Documentation

- [Node.Js](nodejs.org)
- [Prisma](https://www.prisma.io/)
- [Azure Studio](https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio?view=sql-server-ver16&tabs=win-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall)
- [Xampp](https://www.apachefriends.org/download.html)
