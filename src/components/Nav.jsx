import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputForm from './InputForm';

export const EXAMPLE_URL = "https://s3.amazonaws.com/crowdriff-media/mirror/9d5513292148491efe052c09e3b40dbbec9c132342c1a16e44d6590ceaa1f1d3.jpg"

const tabs = [
    {
        "id": 0,
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "title": "Drought",
        "src": "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich",
        "orgsrc": EXAMPLE_URL,
        "folder": "drought"
    },
    {
        "id": 1,
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "title": "Smog",
        "src": "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich",
        "orgsrc": EXAMPLE_URL,
        "folder": "smog"
    },
    {
        "id": 2,
        "text": "Greenery, including trees and plants, is crucial for mitigating climate change. It sequesters carbon, cools urban environments, supports biodiversity, manages water, and improves community well-being. Integrating green spaces into urban planning and taking individual action can contribute to a sustainable future. Let’s embrace greenery to combat climate change and create resilient cities and ecosystems.",
        "title": "Green City",
        "src": "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich",
        "orgsrc": EXAMPLE_URL,
        "folder": "green"
    }

]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Nav() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabs.map((item) => {
                        return (
                            <Tab label={item.title} {...a11yProps(item.id)} />
                        )
                    })}
                </Tabs>
            </Box>
            {tabs.map((item) => {
                return (
                    <TabPanel value={value} index={item.id}>
                        <InputForm tab={item} />
                    </TabPanel>
                )
            })}
        </Box>
    );
}