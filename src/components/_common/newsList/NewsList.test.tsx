import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../../../slice';
import {NewsList} from './NewsList';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);
it ('get data from API', async () => {
    render(<Provider store={store}><NewsList headlines={'general'}/></Provider>);
    expect(screen.queryByText("Retired")).toBeNull();
})