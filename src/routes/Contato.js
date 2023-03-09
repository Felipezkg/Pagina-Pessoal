


export default function Contato() {
    return (
        <div>
            <form className="form-box">
                <a>Se você quer dizer algo, mande um Email agora mesmo!</a>
                <br />
                <label className="label">
                    Nome:
                    <input type={"text"} className="input-box" />
                </label>
                <br />
                <label className="label">
                    Email:
                    <input type={"email"} className="input-box" />
                </label>
                <br />
                <label className="label">
                    Menssagem:
                    <input type={"text"} className="input-box-msg" />
                </label>
                <br/>

                <button className="buttonSubmit" type="submit" title="Enviar">Enviar</button>

            </form>
        </div>
    )
}