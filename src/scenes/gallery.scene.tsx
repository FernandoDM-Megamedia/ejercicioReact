import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { AppLayout } from 'layouts';
import { GalleryContainer } from 'pods/gallery';

export const GalleryScene: React.FC = () => {
    return (
        <AppLayout>
            <GalleryContainer />
        </AppLayout>
    );
};
