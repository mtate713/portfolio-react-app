import classes from '../cssModules/Skills.module.css'

const Skill = (props) => {

    let talent = props.obj

    const subCategoryList = talent.subCategories.map(subcategory => <p>{subcategory.name} {subcategory.skills}</p>)
    return (
        <section className= {classes.skillContainer}>
                   <h3 className= {classes.skillCategory}>{talent.category}</h3>
                   {subCategoryList}
        </section>
    )

}

export default Skill; 