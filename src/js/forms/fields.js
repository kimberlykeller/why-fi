import React from 'react';
import get from 'lodash/get';

import { Input, Label, Select, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';

/* renderField:
 * A component for rendering fields for redux forms.
 * Currently only supports text-based fields.
 */
export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error },
    className,
    extraProps,
}) => (
    <div className={className}>
        {touched && error && (
            <Label pointing="below" basic color='red'>{error}</Label>
        )}
        <Input
            {...input}
            {...extraProps}
            label={label}
            placeholder={get(label, 'content', label)}
            type={type}
            error={error && touched}
        />
    </div>
);

export const renderFieldStyled = styled(renderField)`
    ${ props => props.addMargin ? 'margin: 10px 0;' : null }
`;


/* renderSelectField:
 * A component for rendering fields for redux forms.
 * Currently only supports text-based fields.
 */
export const renderSelectField = ({
    input,
    label,
    type,
    meta: { touched, error },
    className,
    extraProps,
}) => (
    <div className={className}>
        {touched && error && (
            <Label pointing="below" basic color='red'>{error}</Label>
        )}
        <Select
            {...input}
            {...extraProps}
            selection
            placeholder={get(label, 'content', label)}
            error={error && touched}
            onChange={(param,data) => input.onChange(data.value)}
        />
    </div>
);

export const renderSelectFieldStyled = styled(renderSelectField)`
    ${ props => props.addMargin ? 'margin: 10px 0;' : null }
`;



/* renderCheckboxField:
 * A component for rendering checkbox fields for redux forms.
 * Currently only supports text-based fields.
 */
export const renderCheckboxField = ({
    input,
    label,
    meta: { touched },
    className,
    extraProps,
}) => (
    <div className={className}>
        <Checkbox
            {...input}
            {...extraProps}
            label={get(label, 'content', label)}
            onChange={(param,data) => input.onChange(data.checked)}
        />
    </div>
);

export const renderCheckboxFieldStyled = styled(renderCheckboxField)`
    ${ props => props.addMargin ? 'margin: 10px 0;' : null }
`;

