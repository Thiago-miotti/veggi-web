import './style.css'
import VeggiLogo from '../../assets/images/veggi-logo.png';

const Dashboard = () => {
    return(
        <div className="dashboard-container">
            <h1>Bem vindo !</h1>
            <img src={VeggiLogo} />
        </div>
    )
}

export default Dashboard;