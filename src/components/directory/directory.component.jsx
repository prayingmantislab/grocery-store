import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss';
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections:
            [{
                title:'חמוצים',
                imageUrl: 'https://images.unsplash.com/photo-1582536446621-17e0235b514a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                id: 1
            },
            {   title: 'פיצוחים',
                imageUrl: 'https://images.unsplash.com/photo-1582173649515-0f9582d58e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=769&q=80',
                id: 2
            },
            {
                title: 'שמן זית',
                imageUrl:'https://images.unsplash.com/photo-1552592074-ea7a91b851b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
                id: 3
            }, 
            {
                title:'פירות',
                imageUrl:'https://images.unsplash.com/photo-1511546865855-fe4788edf4b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size: 'large',
                id: 4
            },
            {   title:'ירקות',
                imageUrl:'https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                size: 'large',
                id: 5
            }]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))}
                </div>
        );
    }
}
export default Directory;