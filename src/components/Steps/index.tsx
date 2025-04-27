type Props = {}

const Steps = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-1/4">
        <div className="p-4 border-2 rounded-xl">Personal</div>
        <div className="p-4 border-2 rounded-xl">Work</div>
        <div className="p-4 border-2 rounded-xl">Education</div>
        <div className="p-4 border-2 rounded-xl">Skills</div>
        <div className="p-4 border-2 rounded-xl">Confirm</div>
    </div>
  )
}

export default Steps