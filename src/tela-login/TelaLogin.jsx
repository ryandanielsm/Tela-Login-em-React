import './TelaLogin.css'


function TelaLogin() {
    return (
        <>
            <div id='principal'>
                <div id='secao-login'>
                    <h1 id='titulo'>Login</h1>
                    <div id='secao-email-senha'>
                        <label htmlFor="email" className='paragrafo' >E-mail</label>
                        <input type="email" id='email' className='input-css' />
                        <label htmlFor="senha" className='paragrafo'>Senha</label>
                        <input type="password" id='senha' className='input-css' />
                    </div>
                    <div id='lembrar-principal'>
                        <input type="checkbox" name="lembrar" id="lembrar" />
                        <label htmlFor="lembrar" id='lembrar-texto'>Manter-me conectado</label>
                    </div>
                    <div id='botao-principal'>
                        <button id='botao-texto'>Conectar</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TelaLogin