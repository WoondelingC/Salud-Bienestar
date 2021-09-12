import logo from '../../assets/logo.png'
import { Img } from './Registro';
import { Button } from './Registro';
import { Input } from './Registro';


const Olvido = () => {
    
    return (
      <div className="Registro py-4 container text-center w-25">
        <form className="form-signin">
          <Img src={logo} alt="" />

          <h4 className="text-center mb-5">Olvido de Contraseña</h4>

          <p className="m-0">Email</p>
          <Input
            type="email"
            name="email"
            id="inputEmail"
            className="form-control mb-4"
            placeholder="Email"
            required=""
          />
          <p className="m-0">Nueva contraseña</p>
          <Input
            type="Password"
            id="inputPassword"
            name="password"
            className="form-control mb-5"
            placeholder="Contraseña"
            required=""
          />

          <div className="d-grid gap-2">
            <Button className="btn btn-primary">
              Confirmar
            </Button>
          </div>
        </form>
      </div>
    );
}

export default Olvido