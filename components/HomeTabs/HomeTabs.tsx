import { Center,Container, Tabs, rem } from '@mantine/core';

import classes from './HomeTabs.module.css';
import { BsFire } from "react-icons/bs";
import { GiWaveCrest } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
export function HomeTabs() {
  return (
    
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Container>
      <Tabs.List style={{
  
  overflowX: 'auto',    // Add horizontal scroll if necessary
  width: '100%',       // Default width to 100%
}}
  grow>
        <Tabs.Tab
          value="settings"
          leftSection={<GiWaveCrest style={{ width: rem(16), height: rem(16) }} />}
        >
          Waves Feed
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<BsFire style={{ width: rem(16), height: rem(16) }} />}
        >
          Hot Feed
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<FaUsers style={{ width: rem(16), height: rem(16) }} />}
        >
          Following Feed
        </Tabs.Tab>
        
      </Tabs.List>
  </Container>

    </Tabs>
    
  );
}