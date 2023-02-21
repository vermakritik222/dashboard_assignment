import DashboardIcon from "@mui/icons-material/Dashboard";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleIcon from '@mui/icons-material/People';
export default function getRoutes(roleId) {
  if (roleId === 0) {
    return [
      {
        id: "1",
        route: "/user/analytics",
        function: "",
        itemName: "Dashboard",
        icon:<DashboardIcon/>
      },
      {
        id: "2",
        route: "/user/analytics",
        function: "",
        itemName: "Analytics",
        icon:<SignalCellularAltIcon/>
      },
    ];
  } else if (roleId === 1) {
    return [
        {
            id: "1",
            route: "/user/analytics",
            function: "",
            itemName: "Dashboard",
            icon:<DashboardIcon/>
          },
      {
        id: "2",
        route: "/admin/users",
        function: "",
        itemName: "user",
        icon:<PeopleIcon/>
      },
    ];
  }
}
