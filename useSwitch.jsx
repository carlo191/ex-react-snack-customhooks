export default function useSwitch(initialValue = false) {
  const [isOn, setisOn] = useState(initialValue);

  const toggle = () => setisOn((curr) => !curr);

  return [isOn, toggle];
}
