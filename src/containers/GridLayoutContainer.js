import React from 'react';
import { Typography ,GridLayout } from '../components'

export default function GridLayoutContainer() {
    return (
        <GridLayout.FlexContainer>
            <GridLayout>
                <GridLayout.Item id='pos-1'>
                    <GridLayout.Image backgroundImage='/images/raychan.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-2'>
                    <GridLayout.Image backgroundImage='/images/ruth-caron.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-3'>
                    <GridLayout.Image backgroundImage='/images/etty-fidele.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-4'>
                    <GridLayout.Image backgroundImage='/images/oliver-ragfelt.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-5'>
                    <GridLayout.Image backgroundImage='/images/christian-buehner.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-6'>
                    <GridLayout.Image backgroundImage='/images/joshua-oluwagbemiga.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-7'>
                    <GridLayout.Image backgroundImage='/images/icons8-team.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-8'>
                    <GridLayout.Image backgroundImage='/images/mikail-duran.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-9'>
                    <GridLayout.Image backgroundImage='/images/pavel-anoshin.jpg' />
                </GridLayout.Item>
                <GridLayout.Item id='pos-10'>
                    <GridLayout.Image backgroundImage='/images/ospan-ali.jpg' />
                </GridLayout.Item>
            </GridLayout>
            <GridLayout.HeadingContainer>
                <Typography.TitleLarge>Angry People Club.</Typography.TitleLarge>
            </GridLayout.HeadingContainer>
        </GridLayout.FlexContainer>
    )
}