import './styles.css';

const ContainerBody = (props) => {
    const { children } = props;

    return (
        <div className="container-body">
            {children}
        </div>
    );
};

export default ContainerBody;