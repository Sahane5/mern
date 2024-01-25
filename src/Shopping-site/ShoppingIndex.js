


export function LogIn() {
    return(
        <div className="">
            <header className="bg-dark text-white d-flex justify-content-center m-3">
             <h1>LOGIN</h1>
             <span className="bi bi-person"></span>
             <br />
             <br />
             <div className="justify-content-center m-2">
                <dl>
                    <dt>Name</dt>
                    <dd> <input type="text" /> </dd>
                    <dt>Password</dt>
                    <dd> <input type="text" /> </dd>
                    <button className="btn btn-danger w-100">Login</button>
                </dl>
             </div>
            </header>
        </div>
    )
}