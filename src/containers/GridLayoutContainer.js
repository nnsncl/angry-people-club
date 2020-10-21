import React from 'react';
import { GridLayout } from '../components'

export default function GridLayoutContainer() {
    return (
        <GridLayout.FlexContainer>
            <GridLayout>
                <GridLayout.Item id='pos-1'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1543596734-951d6f4f052c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-3'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1565312920580-4e604d7c3ee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-4'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1545618985-3b822dea4b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1205&q=80' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-5'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1561688995-cc5f69775a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-6'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1598155523122-3842334d2c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-7'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-8'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1601412436967-8b2d90944ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-9'>
                    <GridLayout.Image backgroundImage='https://images.unsplash.com/photo-1586435239615-a67f1ae788b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' />
                </GridLayout.Item>
            </GridLayout>
        </GridLayout.FlexContainer>
    )
}