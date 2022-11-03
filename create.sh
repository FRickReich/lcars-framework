#!/bin/sh

proceed='n'
directory='./src/Components'

while [ $proceed != "y" ];
do
    echo ""
    echo -n "Component Name?"
    read component
    echo "\n---------------------------\n"
    echo "This will create the following files:\n
    ./src/Components/${component}/
    ./src/Components/${component}/${component}.jsx
    ./src/Components/${component}/${component}.stories.mdx
    ./src/Components/${component}/${component}.scss
    ./src/Components/${component}/lib.js\n"
    echo "And add the line 'export { ${component} } from './Components/${component}/';' to the ./src/index.js file\n"
    echo -n "is this correct? (y/n): "
    read proceed
done

mkdir "${directory}/${component}/"
touch "${directory}/${component}/${component}.jsx"
touch "${directory}/${component}/${component}.stories.mdx"
touch "${directory}/${component}/${component}.scss"
touch "${directory}/${component}/index.js"

# [Component].jsx file
echo "import React from 'react';
import PropTypes from 'prop-types';
import './${component}.scss'
export const ${component} = ({ className, ...props }) => {
    return (
        <div className={\`${component} \${ className !== undefined ? className : \"\" }\`}>
            ${component} Initiated!
        </div>
    )
}
${component}.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};
    
${component}.defaultProps = {
    className: undefined,
};
" >> "${directory}/${component}/${component}.jsx"

# [Component].stories.mdx file

echo "import { Canvas, Meta, Story, Props } from '@storybook/addon-docs'
import { ${component} } from './${component}';
export const Template = (args) => (
    <${component} { ...args } />
);
<Meta title='Components/${component}' component={ ${component} } />
# ${component}
...
## Examples
### Default
...
<Canvas>
    <Story
        name=\"Default\"
        args={{
            
        }}
    >
        { Template.bind({}) }
    </Story>
</Canvas>
## API
<Props of={ ${component} } />
" >> "${directory}/${component}/${component}.stories.mdx"

# # [Component].scss file

echo ".${component} {
}" >> "${directory}/${component}/${component}.scss"

echo "export * from './${component}';" >> "${directory}/${component}/index.js"
echo "export { ${component} } from './Components/${component}/';" >> "./src/index.js"
