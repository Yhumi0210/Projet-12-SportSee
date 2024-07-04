import PropTypes from 'prop-types'

/**
 * FirstName component that fetches and displays the user's first name.
 *
 * @component
 * @example
 * return (
 *   <FirstName />
 * )
 */

function FirstName(props) {

    return (
        <div>
            {props.firstName}
        </div>
    )
}

FirstName.propTypes = {

    firstName: PropTypes.string
}

export default FirstName
