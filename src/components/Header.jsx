function Header () {



//en h1 podemos hacer @media con md para centrarlo siempre y hacerlo que pase abajo, en vez del <br/>

    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Bruno Delmoro {''} <br/>
                <span className="text-indigo-600">Vet</span>
            </h1>
        </>
    )
}

export default Header;