import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({listCourses}) {
    return (
        <div>
            <div class="table">
                <table id="CourseList" className={css(styles.list)}>
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
                    </thead>
                    <tbody>
                        {listCourses.length === 0 && (
                          <CourseListRow
                            textFirstCell="No course available yet"
                            isHeader={false}
                          />
                        )}

                        {listCourses.map((course) => (
                          <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                            isHeader={false}
                          />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="linea"></div>
        </div>
    );
}

const cssVars = {
    borderTableColor: "rgb(170, 170, 170);",
};
  
const styles = StyleSheet.create({
  list: {
    border: `1px solid ${cssVars.borderTableColor}`,
    borderCollapse: "collapse",
    width: "95%",
    margin: "40px auto 0 auto",
  },
});

CourseList.PropTypes = {
    listCourses: PropTypes.arrayOf(
        CourseShape
    ),
};

CourseList.defaultProps = {
    listCourses: []
};
