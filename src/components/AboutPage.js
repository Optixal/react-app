const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

export default function AboutPage() {
  return (
    <>
      <h1>About {user.name}</h1>
      <img
        className="m-auto rounded-full"
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      ></img>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  )
}
