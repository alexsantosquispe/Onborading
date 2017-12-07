import {DrawerNavigator} from 'react-navigation';
import SideBar from './screens/SideMenu';
import Inbox from './screens/options/inbox';
import Draft from './screens/options/draft';
import Unassigned from './screens/options/unassigned';

export default DrawerNavigator({
    Inbox: {
        screen: Inbox
    },
    Draft: {
        screen: Draft
    },
    Unassigned: {
        screen: Unassigned
    }
}, {
    contentComponent: SideBar,
    drawerWidth: 300
});