import DummyComponentB from "./DummyComponentB";

const DummyComponentA = (props) => {
	return <div id="dummy-component-a">
		<DummyComponentB />
	</div>
}

export default DummyComponentA