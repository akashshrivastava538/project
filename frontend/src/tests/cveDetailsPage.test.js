// tests/CveDetailsPage.test.js
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import CveDetailsPage from '../components/CveDetailsPage';

test('renders CVE details page', async () => {
    render(
        <Provider store={store}>
            <Router>
                <CveDetailsPage />
            </Router>
        </Provider>
    );
    const heading = await screen.findByRole('heading');
    expect(heading).toHaveTextContent(/CVE-/);
});
