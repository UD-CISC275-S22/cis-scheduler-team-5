import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Course } from "../interfaces/course";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Years } from "./Years";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
/*
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function BasicTabs({
    catalog,
    semesters,
    setSemesters,
    plans,
    setPlans,
    currentPlan
}: {
    catalog: Record<string, Record<string, Course>>;
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
<<<<<<< HEAD
    plans: Plan[];
    setPlans: (s: Plan[]) => void;
    currenPlan: Plan;
=======
    plan: string[];
>>>>>>> main
}) {
    let loadedData = currentPlan;
    const [value, setValue] = React.useState(0);
    const [data, setData] = React.useState<string[]>(loadedData);
    setData;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // You can make up your own key however you want, but make it unique!
    const saveDataKey = "MY-PAGE-DATA";

    // Check if the user's data already exists
    const previousData = localStorage.getItem(saveDataKey);
    // If the data doesn't exist, `getItem` returns null
    if (previousData !== null) {
        loadedData = JSON.parse(previousData);
    }
    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(data));
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Plan One" {...a11yProps(0)} />
                    <Tab label="Plan Two" {...a11yProps(1)} />
                    <Tab label="Plan Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            {data.map((onePlan: string) => (
                <div key={onePlan} style={{ marginBottom: "40px" }}>
                    <TabPanel value={value} index={1}>
                        HAHAHA
                        <Container>
                            <Row>
                                <Col>
                                    <h1>{onePlan}</h1>
                                    <Years
                                        currentPlan={currentPlan}
                                        plans={plans}
                                        setPlans={setPlans}
                                        catalog={catalog}
                                        semesters={semesters}
                                        setSemesters={setSemesters}
                                    ></Years>
                                </Col>
                            </Row>
                            <Row></Row>
                        </Container>
                    </TabPanel>
                </div>
            ))}
            <Button onClick={saveData}>Save Data</Button>
        </Box>
    );
}
*/
