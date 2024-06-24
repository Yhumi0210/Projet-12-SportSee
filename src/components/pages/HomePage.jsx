import Header from '../common/Header.jsx'
import MainContent from '../reusable/MainContent.jsx'

/**
 * HomePage component that serves as the main landing page of the application,
 * containing the header and main content sections.
 *
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */

function HomePage() {
    return (
        <div>
            <Header />
            <MainContent />
        </div>
    )
}

export default HomePage