import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputForm from './InputForm';

export const EXAMPLE_URL = "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich/original.png"

const tabs = [
    // {
    //     "id": 0,
    //     "text": "Temperature is a key aspect of climate change. Rising temperatures are caused by human activities and have far-reaching effects. They disrupt ecosystems, lead to extreme weather events, impact human health, and create dangerous feedback loops. Mitigation and adaptation strategies are essential, and individual and collective action is crucial in addressing this global issue.",
    //     "title": "Drought",
    //     "src": "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich",
    //     "orgsrc": EXAMPLE_URL,
    //     "folder": "drought"
    // },
    {
        "id": 0,
        "text": "Air pollution is a significant environmental issue caused by natural and human sources. It has severe health impacts, contributes to climate change, and harms ecosystems. Solutions include transitioning to clean energy, promoting sustainable practices, supporting green technologies, and raising awareness about individual actions.",
        "title": "Smog",
        "src": "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich",
        "orgsrc": EXAMPLE_URL,
        "folder": "smog"
    },
    {
        "id": 1,
        "text": "Greenery, including trees and plants, is crucial for mitigating climate change. It sequesters carbon, cools urban environments, supports biodiversity, manages water, and improves community well-being. Integrating green spaces into urban planning and taking individual action can contribute to a sustainable future. Let’s embrace greenery to combat climate change and create resilient cities and ecosystems.",
        "title": "Vegetation",
        "src": "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich",
        "orgsrc": EXAMPLE_URL,
        "folder": "green"
    },
    {
        "id": 2,
        "text": "Water pollution is a pressing environmental issue caused by various sources, including industrial waste, agricultural runoff, and improper waste disposal. It has detrimental impacts on ecosystems, human health, and access to clean water. Efforts to address water pollution include implementing strict regulations, promoting sustainable practices, and raising awareness about the importance of clean water.",
        "title": "Pollution",
        "src": "https://raw.githubusercontent.com/KTrzyna/climavis/main/src/assets/zurich",
        "orgsrc": EXAMPLE_URL,
        "folder": "pollution"
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