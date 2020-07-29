import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchUsers } from "../../store/actions";
import { RootReducer } from "../../configureStore";
import Users from "../../components/Users/Users";

const About = (props: PropsFromRedux) => {
  useEffect(() => {
    props.onFetchUser();
  }, []);
  return (
    <div className="row">
      {props.users.map((user) => {
        return (
          <div className="col-md-6">
            <Users
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              address={user.address}
            />
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state: RootReducer) => ({
  users: state.users.users,
});
const mapDispatchToProps = {
  onFetchUser: fetchUsers,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(About);
