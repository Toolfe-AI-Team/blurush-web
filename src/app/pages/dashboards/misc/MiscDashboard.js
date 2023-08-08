import React from 'react';
import { Grid } from "@mui/material";
// import CurrencyCalculator from "../../../shared/widgets/CurrencyCalculator";

// import SalesOverview from "../../../shared/metrics/SalesOverview";
// import Documents1 from "../../../shared/widgets/Documents1";
// import Ideas1 from "../../../shared/widgets/Ideas1";
// import UserOrders from "../../../shared/metrics/UserOrders";
// import UserSummary from "../../../shared/widgets/UserSummary";
// import ScheduleCard from "../../../shared/widgets/ScheduleCard";
// import UserProfileCard1 from "../../../shared/widgets/UserProfileCard1";
// import NewConnections from "../../../shared/widgets/NewConnections";
// import RecentActivities from "../../../shared/widgets/RecentActivities";
// import LastMonthSales from "../../../shared/metrics/LastMonthSales";
// import OnlineSignupsFilled from "../../../shared/metrics/OnlineSignupsFilled";
// import NewVisitorsThisMonth from "../../../shared/metrics/NewVisitorsThisMonth";
// import TotalRevenueThisYear from "../../../shared/metrics/TotalRevenueThisYear";
// import UpgradePlan from "../../../shared/widgets/UpgradePlan";
// import SalesReport1 from "../../../shared/metrics/SalesReport1";
// import WordOfTheDay from "../../../shared/widgets/WordOfTheDay";
// import OurOffice1 from "../../../shared/widgets/OurOffice1";
// import UserProfileAction from "../../../shared/widgets/UserProfileAction";
// import PopularProducts from "../../../shared/widgets/PopularProducts";
// import ProjectsListCard from "../../../shared/widgets/ProjectsListCard";
// import ProductImage from "../../../shared/widgets/ProductImage";
// import ExplorePlaceCard from "../../../shared/widgets/ExplorePlaceCard";
// import MarkerClusterer from "../../maps/MarkerClusterer";
// import AppUsers from "../../../shared/metrics/AppUsers";
// import CafeStore1 from "../../../shared/widgets/CafeStore1";
// import LatestAlerts from "../../../shared/widgets/LatestAlerts";
// import DailyFeed from "../../../shared/widgets/DailyFeed";



import SimpleAccordions from "/Users/swag/Documents/GitHub/blurush-web/src/app/pages/components/mui/Accordions/SimpleAccordions.js";
import TransitionAlerts from "/Users/swag/Documents/GitHub/blurush-web/src/app/pages/components/mui/Alerts/TransitionAlerts.js"
import BasicAlerts from 'app/pages/components/mui/Alerts/BasicAlerts';
import OutlinedAlerts from 'app/pages/components/mui/Alerts/OutlinedAlerts';
import ComboBox from 'app/pages/components/mui/AutoCompletes/ComboBox';
import CountrySelect from 'app/pages/components/mui/AutoCompletes/CountrySelect';
import LimitTags from 'app/pages/components/mui/AutoCompletes/LimitsTag';
import CheckboxesTags from 'app/pages/components/mui/AutoCompletes/CheckboxesTags';
import ImageAvatars from 'app/pages/components/mui/Avatars/ImageAvatars';
import GroupAvatars from 'app/pages/components/mui/Avatars/GroupAvatars';
import SimpleBackdrop from 'app/pages/components/mui/Backdrops/SimpleBackdrop';
import ColorBadges from 'app/pages/components/mui/Badges/ColorBadges';
import BadgesVisibility from 'app/pages/components/mui/Badges/BadgesVisibility';
import SimpleBottomNavigation from 'app/pages/components/mui/BottomNavigations/SimpleBottomNavigation';
import IconBreadcrumbs from 'app/pages/components/mui/Breadcrumbs/IconBreadcrumbs';
import GroupOrientation from 'app/pages/components/mui/ButtonsGroup/GroupOrientation';
import BasicButtonGroup from 'app/pages/components/mui/ButtonsGroup/BasicButtonGroup';
import ContainedButtons from 'app/pages/components/mui/Buttons/ContainedButtons';
import LoadingButtonsTransition from 'app/pages/components/mui/Buttons/LoadingButtonsTransition';
import CheckboxesGroup from 'app/pages/components/mui/Checkboxes/CheckboxesGroup';
import IconCheckboxes from 'app/pages/components/mui/Checkboxes/IconCheckboxes';
import ChipsAddRemove from 'app/pages/components/mui/Chips/ChipsAddRemove';

import AlertDialogSlide from 'app/pages/components/mui/Dialogs/AlertDialogSlide';
import ScrollDialog from 'app/pages/components/mui/Dialogs/ScrollDialog';
import MiddleDividers from 'app/pages/components/mui/Dividers/MiddleDividers';
import InsetDividers from 'app/pages/components/mui/Dividers/InsetDividers';
import ComplexGrid from 'app/pages/components/mui/Grids/ComplexGrid';
import BasicLinks from 'app/pages/components/mui/Links/BasicLinks';
import SelectedList from 'app/pages/components/mui/Lists/SelectedList';

import MenuListComposition from 'app/pages/components/mui/Menus/MenuListComposition';
import NestedModal from 'app/pages/components/mui/Modals/NestedModal';
import PaginationOutlined from 'app/pages/components/mui/Paginations/PaginationOutlined';
import Elevation from 'app/pages/components/mui/Papers/Elevation';

import DateAndTimePickers from 'app/pages/components/mui/Pickers/DateAndTimePickers';
import MouseOverPopover from 'app/pages/components/mui/Popovers/MouseOverPopover';
import CircularIntegration from 'app/pages/components/mui/Progress/CircularIntegration';
import LinearBuffer from 'app/pages/components/mui/Progress/LinearBuffer';
import DelayingAppearance from 'app/pages/components/mui/Progress/DelayingAppearance';
import ErrorRadios from 'app/pages/components/mui/RadioButtons/ErrorRadios';
import CustomizedRating from 'app/pages/components/mui/Ratings/CustomizedRating';
import DialogSelect from 'app/pages/components/mui/Selects/DialogSelect';

import ColorSnackbars from 'app/pages/components/mui/Snackbars/ColorSnackbars';
import SimpleSnackbar from 'app/pages/components/mui/Snackbars/SimpleSnackbar';
import ControlledOpenSpeedDial from 'app/pages/components/mui/SpeedDials/ControlledOpenSpeedDial';
import VerticalLinearStepper from 'app/pages/components/mui/Steppers/VerticalLinearStepper';
import ProgressMobileStepper from 'app/pages/components/mui/Steppers/ProgressMobileStepper';
import IconTabs from 'app/pages/components/mui/Tabs/IconTabs';
import FormPropsTextFields from 'app/pages/components/mui/TextFields/FormPropsTextFields';
import InputAdornments from 'app/pages/components/mui/TextFields/InputAdornments';
import OppositeContentTimeline from 'app/pages/components/mui/Timelines/OppositeContentTimeline';
import TypesTypography from 'app/pages/components/mui/Typography/TypesTypography';
const MiscDashboard = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} md={6}>
                <SimpleAccordions />
            </Grid>
            <Grid item xs={12} md={6}>
                <TransitionAlerts />
            </Grid>
            <Grid item xs={12} md={6}>
                <BasicAlerts />
            </Grid>
            <Grid item xs={12} md={6}>
                <OutlinedAlerts />
            </Grid>
            <Grid item xs={12} md={6}>
                <ComboBox />
            </Grid>
            <Grid item xs={12} md={6}>
                <CountrySelect />
            </Grid>
            <Grid item xs={12} md={6}>
                <LimitTags />
            </Grid>
            <Grid item xs={12} md={6}>
                <CheckboxesTags />
            </Grid>
            <Grid item xs={12} md={6}>
                <ImageAvatars />
            </Grid>
            <Grid item xs={12} md={6}>
                <GroupAvatars />
            </Grid>
            <Grid item xs={12} md={6}>
                <SimpleBackdrop />
            </Grid>
            <Grid item xs={12} md={6}>
                <ColorBadges />
            </Grid>
            <Grid item xs={12} md={6}>
                <BadgesVisibility />
            </Grid>
            <Grid item xs={12} md={6}>
                <SimpleBottomNavigation />
            </Grid>
            <Grid item xs={12} md={6}>
                <IconBreadcrumbs />
            </Grid>
            <Grid item xs={12} md={6}>
                <GroupOrientation />
            </Grid>
            <Grid item xs={12} md={6}>
                <BasicButtonGroup />
            </Grid>
            <Grid item xs={12} md={6}>
                <ContainedButtons />
            </Grid>
            <Grid item xs={12} md={6}>
                <LoadingButtonsTransition />
            </Grid>
            <Grid item xs={12} md={6}>
                <CheckboxesGroup />
            </Grid>
            <Grid item xs={12} md={6}>
                <IconCheckboxes />
            </Grid>
            <Grid item xs={12} md={6}>
                <ChipsAddRemove />
            </Grid>
            <Grid item xs={12} md={6}>
                <AlertDialogSlide />
            </Grid>
            <Grid item xs={12} md={6}>
                <ScrollDialog />
            </Grid>
            <Grid item xs={12} md={6}>
                <MiddleDividers />
            </Grid>
            <Grid item xs={12} md={6}>
                <InsetDividers />
            </Grid>
            <Grid item xs={12} md={6}>
                <ComplexGrid />
            </Grid>
            <Grid item xs={12} md={6}>
                <BasicLinks />
            </Grid>
            <Grid item xs={12} md={6}>
                <SelectedList />
            </Grid>
            <Grid item xs={12} md={6}>
                <MenuListComposition />
            </Grid>
            <Grid item xs={12} md={6}>
                <NestedModal />
            </Grid>
            <Grid item xs={12} md={6}>
                <PaginationOutlined />
            </Grid>
            <Grid item xs={12} md={6}>
                <Elevation />
            </Grid>
            <Grid item xs={12} md={6}>
                <DateAndTimePickers />
            </Grid>
            <Grid item xs={12} md={6}>
                <MouseOverPopover />
            </Grid>
            <Grid item xs={12} md={6}>
                <CircularIntegration />
            </Grid>
            <Grid item xs={12} md={6}>
                <LinearBuffer />
            </Grid>
            <Grid item xs={12} md={6}>
                <DelayingAppearance />
            </Grid>
            <Grid item xs={12} md={6}>
                <ErrorRadios />
            </Grid>
            <Grid item xs={12} md={6}>
                <CustomizedRating />
            </Grid>
            <Grid item xs={12} md={6}>
                <DialogSelect />
            </Grid>
            <Grid item xs={12} md={6}>
                <ColorSnackbars />
            </Grid>
            <Grid item xs={12} md={6}>
                <SimpleSnackbar />
            </Grid>
            <Grid item xs={12} md={6}>
                <ControlledOpenSpeedDial />
            </Grid>
            <Grid item xs={12} md={6}>
                <VerticalLinearStepper />
            </Grid>
            <Grid item xs={12} md={6}>
                <Elevation />
            </Grid>
            <Grid item xs={12} md={6}>
                <ProgressMobileStepper />
            </Grid>
            <Grid item xs={12} md={6}>
                <IconTabs />
            </Grid>
            <Grid item xs={12} md={6}>
                <FormPropsTextFields />
            </Grid>
            <Grid item xs={12} md={6}>
                <InputAdornments />
            </Grid>
            <Grid item xs={12} md={6}>
                <OppositeContentTimeline />
            </Grid>
            <Grid item xs={12} md={6}>
                <TypesTypography />
            </Grid>

        </Grid>
    );
};

export default MiscDashboard;