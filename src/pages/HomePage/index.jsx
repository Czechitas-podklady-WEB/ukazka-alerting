import { Alert } from '../../components/Alert';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Alert 
        type="warning"
        title="Pozor, slabé heslo"
      >
        <p>Slabé heslo může způsobit zneužití vašeho účtu. Zvolte silné heslo, které obsahuje alespoň 8 znaků, velká a malá písmena, číslice a speciální znaky.</p>

        <p>Tip: Zkuste si vygenerovat heslo pomocí <a href="https://www.lastpass.com/password-generator" target="_blank" rel="noreferrer">nástroje na generování hesel</a>.</p>
      </Alert>
    </div>
  );
};

