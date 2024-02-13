import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
    backgroundColor: "#f5f5f5ab"
}

const headerStyle = {
    backgroundColor: "#deb5b545"
}

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    let isHeaderStyle;

    if (isHeader === true) {
        if (textSecondCell === null) {
            element = <th colSpan="2">{textFirstCell}</th>;
       
        } else {
            element = (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>
            );
        }
    } else {
        element = (
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        );
    }

    if (isHeader) isHeaderStyle = headerStyle;
    else isHeaderStyle = rowStyle;

    return <tr style={isHeaderStyle}>{element}</tr>;
}


CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};
