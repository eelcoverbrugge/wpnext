import {Cover} from "@/components/Cover";
import {Heading} from "@/components/Heading";

export const BlockRenderer = ({blocks}) => {
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/heading': {
                console.log('BLOCK:')
                console.log(block)
                return (
                    <Heading
                        key={block?.id}
                        level={block?.attribues?.level}
                        content={block?.attribues?.content}
                        textAlign={block?.attribues?.textAlign}
                    />
                );
            }
            case 'core/cover': {
                console.log('BLOCK:')
                console.log(block)
                return (
                    <Cover key={block?.id} background={block?.attributes?.url}>
                        <BlockRenderer blocks={block?.innerBlocks}/>
                    </Cover>
                );
            }
            default:
                return null;
        }
    })
}