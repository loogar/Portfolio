import { SpaceProps, Tag, Wrap, WrapItem } from '@chakra-ui/react'

interface IProfileTags {
	tags: Array<string>
	marginTop?: SpaceProps['marginTop']
}

const ProfileTags: React.FC<IProfileTags> = (props) => {
	return (
		<Wrap spacing={2} marginTop={props.marginTop}>
			{props.tags.map((tag) => {
				return (
					<WrapItem key={tag}>
						<Tag size={'md'} variant='solid' colorScheme='orange'>
							{tag}
						</Tag>
					</WrapItem>
				)
			})}
		</Wrap>
	)
}

export default ProfileTags
