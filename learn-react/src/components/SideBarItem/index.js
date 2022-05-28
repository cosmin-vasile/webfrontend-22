import PropTypes from 'prop-types';

const SideBarItem = (props) => {
    const { link, label } = props;

    return (
        <li><a href={link}>{label}</a></li>
    );
};

SideBarItem.propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default SideBarItem;