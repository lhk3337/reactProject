// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// yesterday DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// yesterday DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// yesterday DONE
// 4. Add properly working links to the MainNavigation
// yesterday DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// yesterday DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// DONE
// 7. Output the ID of the selected event on the EventDetailPage
// DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
// DONE

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage";
import RootLayout from "./page/Root";
import EventsPage, { loader as eventsLoader } from "./page/EventsPage";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "./page/EventDetailPage";
import NewEventPage from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";
import EventsRootLayout from "./page/EventsRoot";
import ErrorPage from "./page/Error";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./page/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // index: true, 부모 route(여기서는 "/")가 활성화 될 경우 로딩이 되어야 하는 기본 라우트를 정의한다.
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: "edit", element: <EditEventPage />, action: manipulateEventAction },
            ],
          },
          { path: "new", element: <NewEventPage />, action: manipulateEventAction },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
