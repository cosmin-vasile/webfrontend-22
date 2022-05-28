import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SideBarItem from '../SideBarItem';
import './styles.css';

const Sidebar = (props) => {
    const { className } = props;
    const data = [{
        title: 'link 1',
        href: '#link1'
    }, {
        title: 'link 2',
        href: '#link2'
    }, {
        title: 'link 2',
        href: '#link2'
    },{
        title: 'link 2',
        href: '#link2'
    },{
        title: 'link 2',
        href: '#link2'
    },{
        title: 'link 2',
        href: '#link2'
    },{
        title: 'link 2',
        href: '#link2'
    },{
        title: 'link 2',
        href: '#link2'
    }];

    // if (isLoading) {
    //     return 'Is loading';
    // }

    return (
        <div className={`sidebar ${className}`}>
            <ul>
                {data.map((item, index) => {
                    return (
                        <SideBarItem key={`sidebar-item-${index}`} label={item.title} link={item.href} />
                    );
                })}
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    className: PropTypes.string,
};

Sidebar.defaultProps = {
    className: '',
};

export default Sidebar;